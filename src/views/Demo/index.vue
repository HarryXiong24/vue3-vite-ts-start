<template>
	<div class="demo">
		<div
			v-for="(item, index) in list"
			:key="index"
			class="item"
		>
			<p>{{ item.id }}</p>
			<p>{{ item.key }}</p>
			<p>{{ item.name }}</p>
			<p>{{ item.age }}</p>
			<p>{{ item.sex }}</p>
			<p>{{ item.address }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, reactive, ref } from 'vue';
	import { getList } from '@/api/demo';

	let list: any = ref({});
	const loadData = async () => {
		list.value = await getList();
		console.log(list);
	};
	onMounted(() => {
		loadData();
	});
</script>

<style lang="scss">
	.demo {
		.item {
			border: 1px solid black;
		}
	}
</style>