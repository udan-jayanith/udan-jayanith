<script setup>
import Footer from "./components/Footer/Footer.vue";
import { onMounted, ref } from "vue";

useHead({
	meta: [
		{
			name: "description",
			content:
				"Udan is someone who enjoys building application software and diving into ideas that genuinely interest him. He likes experimenting, learning along the way, and turning concepts into practical, meaningful creations",
		},

		{
			name: "keywords",
			content: "udan-jayanith, Udan, Udan Jayanith, udan jayanith",
		},
		{ name: "author", content: "Udan Jayanith" },
	],
	link: [
		{ rel: "preconnect", href: "https://fonts.googleapis.com" },
		{ rel: "preconnect", href: "https://fonts.gstatic.com" },
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Balthazar&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap",
		},
	],
});

let scrollY = 0;
let spriteEl = useState("spriteEl", () => null);

function updateSpritePos({ x, y }) {
	if (spriteEl.value == null) {
		console.log(spriteEl);
		return;
	}
	spriteEl.value.style.left = x + 10 + "px";
	spriteEl.value.style.top = y + scrollY - 16 + "px";
}

function onMountedClient() {
	window.addEventListener("scroll", () => {
		scrollY = window.scrollY;
	});

	window.addEventListener("mousemove", (event) => {
		updateSpritePos(event);
	});
}

onMounted(() => {
	if (process.client || window) {
		onMountedClient();
	}
});
</script>

<template>
	<img src="./assest/dancing-gopher.gif" class="sprite" ref="spriteEl" alt="dancing Gopher sprite" />
	<main class="main-body">
		<NuxtPage></NuxtPage>
		<Footer></Footer>
	</main>
</template>

<style scoped>
.main-body {
	margin: 0px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 26px;
	padding-bottom: 60px;
	width: 50%;
	min-height: 100vh;
	max-width: 100%;
	box-sizing: border-box;
}

.sprite {
	width: 26px;
	position: absolute;
	z-index: 99;
	top: 0px;
}

@media (orientation: portrait) {
	.main-body {
		padding: 1rem 2rem;
		width: auto;
	}
	.sprite {
		display: none;
	}
}
</style>
