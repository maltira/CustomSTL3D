<script setup>
import Header from '../components/Layout/Header.vue';
import Footer from '../components/Layout/Footer.vue'
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

</script>

<template>
	<div id="app">
		<NuxtLayout>
			<Header/>
			<NuxtPage />
			<Footer/>
		</NuxtLayout>
	</div>
</template>

<style lang="scss" scoped>
* {
		margin: 0;
		padding: 0;
}
body {
	overflow-x: hidden;
}
#app{
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
#demo-top-bar {
	text-align: left;
	background: #222;
	position: relative;
	zoom: 1;
	width: 100% !important;
	z-index: 6000;
	padding: 20px 0 20px;
}
#demo-bar-inside {
	width: 960px;
	margin: 0 auto;
	position: relative;
	overflow: hidden;
}
#demo-bar-buttons {
	padding-top: 10px;
	float: right;
}
#demo-bar-buttons a {
	font-size: 0.75rem;
	margin-left: 20px;
	color: white;
	margin: 2px 0;
	text-decoration: none;
	font: 14px "Lucida Grande", Sans-Serif !important;
}
#demo-bar-buttons a:hover,
#demo-bar-buttons a:focus {
	text-decoration: underline;
}
#demo-bar-badge {
	display: inline-block;
	width: 302px;
	padding: 0 !important;
	margin: 0 !important;
	background-color: transparent !important;
}
#demo-bar-badge a {
	display: block;
	width: 100%;
	height: 38px;
	border-radius: 0;
	bottom: auto;
	margin: 0;
	background: url(/images/examples-logo.png) no-repeat;
	background-size: 100%;
	overflow: hidden;
	text-indent: -9999px;
}
#demo-bar-badge:before, #demo-bar-badge:after {
	display: none !important;
}
</style>