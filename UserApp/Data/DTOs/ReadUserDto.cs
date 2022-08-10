using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UserApp.Data.DTOs
{
    public class ReadUserDto
    {
		[Key]
		[Required]
		public int Codigo { get; set; }

		[Required(ErrorMessage = "O campo Nome é Obrigatório!")]
		[StringLength(50, ErrorMessage = "O campo Nome precisa ter no máximo 50 caracteres")]
		public string Nome { get; set; }

		[Required(ErrorMessage = "O campo CPF é Obrigatório!")]
		[MinLength(11, ErrorMessage = "O campo CPF precisa ter no minimo 11 caracteres!")]
		[MaxLength(11, ErrorMessage = "O campo CPF precisa ter no máximo 11 caracteres!")]
		public string Cpf { get; set; }

		public string Endereco { get; set; }

		public string Telefone { get; set; }

		public string Login { get; set; }

		public string Senha { get; set; }

		public DateTime Date { get; set; }
	}
}
