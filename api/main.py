from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# 🔐 Configurações de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou substitua por ["http://localhost:3000"] para mais segurança
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo do aluno
class Aluno(BaseModel):
    id: int
    nome: str
    idade: int

# "Banco de dados" em memória
alunos_db: List[Aluno] = []

@app.get("/alunos", response_model=List[Aluno])
def get_alunos():
    return alunos_db

@app.post("/aluno", response_model=Aluno)
def add_aluno(aluno: Aluno):
    for a in alunos_db:
        if a.id == aluno.id:
            raise HTTPException(status_code=400, detail="ID já existe.")
    alunos_db.append(aluno)
    return aluno

@app.get("/aluno/{id}", response_model=Aluno)
def get_aluno(id: int):
    for aluno in alunos_db:
        if aluno.id == id:
            return aluno
    raise HTTPException(status_code=404, detail="Aluno não encontrado.")
