package br.com.projeto.api.repositorio;

import org.springframework.data.repository.CrudRepository;

import br.com.projeto.api.modelo.Cliente;

//esse arquivo será um rep pra entrar no BD para fzr operações
public interface Repositorio extends CrudRepository<Cliente, Long> {
    
}
