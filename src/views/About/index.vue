<template>
	<div class="about">
		<div class="calculation">
			<p>mutations</p>
			<p>{{ store.state.count }}</p>
			<button @click="add">count++</button>
		</div>
		<div class="form">
			<p>actions</p>
			<input v-model="name">
			<input v-model="age">
			<button @click="submitMessage">提交</button>
		</div>
		<div>
			<p>Name: {{ store.state.message.name }}</p>
			<p>Age: {{ store.state.message.age }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore();
	let name = ref('');
	let age = ref('');

	const add = () => {
		store.commit('setCount');
	};
	const submitMessage = () => {
		const message = {
			name: name.value,
			age: age.value,
		};
		store.dispatch('setMessage', message);
	};
</script>

<style lang="scss">
	.about {
		.calculation {
			margin: 20px;
		}
		.form {
			margin: 20px;
		}
	}
</style>