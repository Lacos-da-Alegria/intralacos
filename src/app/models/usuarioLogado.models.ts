export class UsuarioLogadoModel {
  private cpf: Number;
  private nome: String;
  private dataNascimento: String;
  private email: String;
  private celular: Number;
  private endereco: String;
  private nomeDoutor: String;
  private novato: Boolean;
  private observacao: String;
  private sexo: String;
  private token: String;

  constructor(cpf: Number, nome: String, dataNascimento: String, email: String, celular: Number, endereco: String,
              nomeDoutor: String, novato: Boolean, observacao: String, sexo: String, token: String) {
    this.cpf = cpf;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.email = email;
    this.celular = celular;
    this.endereco = endereco;
    this.nomeDoutor = nomeDoutor;
    this.novato = novato;
    this.observacao = observacao;
    this.sexo = sexo;
    this.token = token;
  }
}
