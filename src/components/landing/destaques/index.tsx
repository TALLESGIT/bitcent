import Area from "../comum/Area";
import ImagemResponsiva from "../comum/ImagemResponsiva";
import principal from "../../../../public/principal.jpg";
import Slogan from "./Slogan";

export default function Destaques() {
	return (
		<Area id="inicio" className="pt-20">
			<div
				className="flex items-center justify-around
                h-[500px]"
			>
				<Slogan />
				<ImagemResponsiva
					imagem={principal}
					className="rotate-3 hidden md:inline"
				/>
			</div>
		</Area>
	);
}
