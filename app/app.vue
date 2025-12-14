<script setup>
import Footer from "./components/Footer/Footer.server.vue";
import { onMounted } from "vue";

let scrollY = 0;

let spritePos = useState("spritePos", () => {
	return { left: 0, top: 0 };
});

function updateSpritePos({ x, y }) {
	spritePos.value.left = x + 10 + "px";
	spritePos.value.top = y + scrollY - 16 + "px";
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
	<NuxtImg
		src="/dancing-gopher.gif"
		class="sprite"
		alt="dancing Gopher sprite"
		:style="spritePos"
	/>
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
