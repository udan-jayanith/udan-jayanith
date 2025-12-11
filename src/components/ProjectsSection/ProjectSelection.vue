<script setup>
import RepoBox from "./RepoBox/RepoBox.vue";
import { onBeforeMount, ref } from "vue";

async function getPinedRepos(){
	let res = await fetch(`https://pinned.berrysauce.dev/get/udan-jayanith`)
	let json = await res.json()
	return json
}


let pinedRepos = ref(null)
	
onBeforeMount(async()=>{
	pinedRepos.value = await getPinedRepos()
})
</script>

<template>
	<div class="project-selection-body" v-if="pinedRepos != null">
		<RepoBox v-for="repo in pinedRepos" :repo="repo"></RepoBox>
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
