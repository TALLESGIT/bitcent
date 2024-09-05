import Depoimentos from "./depoimentos";
import Rodape from "./rodape";

import Vantagens from "./vantagens";
import Cabecalho from "./cabecalho";
import Destaques from "./destaques";

export default function Landing() {
	return (
		<div>
			<Cabecalho />
			<Destaques />
			<Vantagens />
			<Depoimentos />
			<Rodape />
		</div>
	);
}
