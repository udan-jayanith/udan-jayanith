<script setup>
import { onMounted } from "vue";
import RepoBox from "./RepoBox/RepoBox.server.vue";

async function getPinedRepos() {
	let { data } = await useFetch(`https://pinned.berrysauce.dev/get/udan-jayanith`, { server: false });
	return data.value;
}

let pinedRepos = useState("pinedRepos", () => [{}]);

onMounted(() => {
	getPinedRepos().then((json) => {
		pinedRepos.value = json;
	});
});
</script>

<template>
	<div class="project-selection-body">
		<ClientOnly>
			<RepoBox v-for="repo in pinedRepos" :repo="repo"></RepoBox>
		</ClientOnly>
	</div>
</template>

<style scoped>
.project-selection-body {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
}

@media (orientation: portrait) {
	.project-selection-body {
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
