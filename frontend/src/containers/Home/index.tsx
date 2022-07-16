import { useState, type FunctionComponent } from "react";
import { motion } from "framer-motion";
import { AnimatedText, MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
// import Feature from "./Feature";
// import Package from "./Package";
// import ReactIcon from "./ReactIcon";
// import { Features } from "../../config/features.config";
// import { Packages } from "../../config/packages.config";

// const LOREM_IPSUM_TEXT = `
//   Lorem ipsum dolor sit amet, alia appareat usu id, has legere facilis in. Nam
//   inani malorum epicuri id, illud eleifend reformidans nec cu. Stet meis rebum
//   quo an, ad recusabo praesent reprimique duo, ne delectus expetendis philosophia
//   nam. Mel lorem recusabo ex, vim congue facilisis eu, id vix oblique mentitum.
//   Vide aeterno duo ei. Qui ne urbanitas conceptam deseruisse, commune philosophia
//   eos no. Id ullum reprimique qui, vix ei malorum assueverit contentiones. Nec facilis
//   dignissim efficiantur ad, tantas tempor nam in. Per feugait atomorum ut. Novum appareat
//   ei usu, an usu omnium concludaturque. Et nam latine mentitum, impedit explicari ullamcorper
//   ut est, vis ipsum viderer ei. Porro essent eu per, ut tantas dissentias vim. Dicant regione
//   argumentum vis id, adipisci accusata postulant at vix. Adipisci vituperata ea duo, eu summo
//   detracto mei, et per option periculis. Eos laudem vivendo ex.
// `;

// const placeholderText = [
// 	{ type: "heading1", text: "Framer Motion" },
// 	{
// 		type: "heading2",
// 		text: "Animating responsive text!",
// 	},
// ];

const Home: FunctionComponent = () => {
	const [replay, setReplay] = useState(true);
	// Placeholder text data, as if from API
	const placeholderText = [
		{ type: "heading1", text: "Framer Motion" },
		{
			type: "heading2",
			text: "Animating responsive text!",
		},
	];

	const container = {
		visible: {
			transition: {
				staggerChildren: 0.025,
			},
		},
	};

	// Quick and dirt for the example
	const handleReplay = () => {
		setReplay(!replay);
		setTimeout(() => {
			setReplay(true);
		}, 600);
	};

	return (
		<div className="view-wrapper">
			<MetaInfo {...getRouteMetaInfo("Home")} />
			<motion.div
				className="App"
				initial="hidden"
				animate="visible"
				// animate={replay ? "visible" : "hidden"}
				variants={container}
			>
				<div className="container">
					{placeholderText.map((item, index) => {
						return <AnimatedText {...item} key={index} />;
					})}
				</div>
				<button onClick={handleReplay}>
					Replay <span>⟲</span>
				</button>
			</motion.div>
			{/* <section className="hero is-dark">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="is-flex is-horizontal-center">
            <figure className="image is-132x132">
              <ReactIcon />
            </figure>
          </div>
          <h1 className="title">SEO Friendly SPA</h1>
          <hr />
          {Features.map((feat, idx) => <Feature key={idx} {...feat} />)}
        </div>
      </div>
    </section>
    <section className="container dashboard-content">
      <div className="columns">
        {Packages.map((pkg, idx) => <Package key={idx} {...pkg} />)}
      </div>
      <hr />
      <div className="columns">
        <div className="column">
          <p className="title">lorem ipsum</p>
          <div className="content">{LOREM_IPSUM_TEXT}</div>
        </div>
      </div>
    </section> */}
		</div>
	);
};

export default Home;
