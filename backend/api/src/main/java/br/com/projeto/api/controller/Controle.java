package br.com.projeto.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import br.com.projeto.api.modelo.Cliente;
import br.com.projeto.api.repositorio.Repositorio;

@RestController
@CrossOrigin(origins = "*") // dentro de origins colocar a porta para liberar/ se colocar um "*" ele vai liverar pra todas as portas 
public class Controle {

    @Autowired
    private Repositorio acao;

    @PostMapping("/")
    public Cliente cadastrar(@RequestBody Cliente c){// a função espera receber um cliente como paramentro, por isso o RequestBody
        return acao.save(c);
    }

    @GetMapping("/")
    public Iterable<Cliente> selecionar(){
        return acao.findAll();
    }
    
    @PutMapping("/")
    public Cliente Editar(@RequestBody Cliente c){
        return acao.save(c);
    }

    @DeleteMapping("/{codigo}")
    public void remover(@PathVariable long codigo){
        acao.deleteById(codigo);
    }

}
