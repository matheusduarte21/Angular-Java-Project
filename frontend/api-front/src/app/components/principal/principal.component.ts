import { Component} from '@angular/core';
import { Cliente } from 'src/app/modelo/Cliente';
import { ClienteService } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  //Objeto do tipo Cliente
  cliente = new Cliente();

  //variavel para visibilidade dos botões
  btnCadastro: boolean = true;

  //visibilidade da tabela

  tabela: boolean = true;

  //JSON de clientes
  Clientes:Cliente[] = [];

  constructor(private servico:ClienteService) {}

  //método para selecionar os clientes// método de seleção
  selecionar(): void{
    this.servico.selecionar()
    .subscribe(retorno => this.Clientes = retorno); //faço uma requisoção GET com o servico selecionar e colocar o retorno dentro do array Clientes
  }

  //método de cadastro
  cadastrar(): void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {

      //cadastrar o cliente no vetor
      this.Clientes.push(retorno);

      //limpar formulário
      this.cliente = new Cliente();

      //mensagem
      alert('Client cadastrado com sucesso!')
    });

  }

  //metodo para selecionar um cliente especifico

  selecionarCliente(posicao: number): void{
    //Selecionar cliente no vetor
    this.cliente = this.Clientes[posicao];

    //visibilidade dos botões
    this.btnCadastro = false ;

    //visibilidade da tabela
    this.tabela = false;
  }

  //método para editar o cliente

  Editar(): void{
    this.servico.editar(this.cliente)
    .subscribe(retorno =>{

      //obter posição do vetor, onde está o cliente
      let posicao = this.Clientes.findIndex(obj => {
        return obj.codigo == retorno.codigo;
      });

      this.cliente = new Cliente();

      //alterar os dados do cliente do vetor
      this.Clientes[posicao] = retorno;

      this.btnCadastro = true;
      this.tabela = true;

      alert('Cliente alterado com sucesso!')
    });
  }

  remover(): void{
    this.servico.remover(this.cliente.codigo)
    .subscribe(retorno =>{
      let posicao = this.Clientes.findIndex(obj => {
        return obj.codigo == this.cliente.codigo;
      });

      this.Clientes.splice(posicao,1);

      this.cliente = new Cliente();

      this.btnCadastro = true;
      this.tabela = true;

      alert('Cliente Removido')
    })
  }

  //Método para cancelar
  cancelar(): void{

    this.cliente = new Cliente();
    this.btnCadastro = true;
    this.tabela = true;

  }

  //método de inicialização
  ngOnInit(){
    this.selecionar();
  }
}
