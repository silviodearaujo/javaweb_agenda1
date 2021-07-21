/**
 * Confirmação de exclusão de um contato
 * @author silvio cesar araujo
 * @param idcon
 */

function confirmar(idcon) {
	let resposta = confirm("Confirmar a exclusão deste contato?")
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon
	}
}