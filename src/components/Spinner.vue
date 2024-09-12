<template>
    <div class="container d-flex justify-content-center">
  <svg class="spinner" width="55" height="55" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle class="circleAnimation" cx="77.5" cy="77.5" r="60" stroke="currentColor" stroke-width="35"/>
    <path d="M120.329 35.48a59.998 59.998 0 0 1 6.712 75.868" stroke="currentColor" stroke-width="35"/>
  </svg>
  <p>Loading</p>
</div>
</template>
<script>
export default {
name: "SpinnerComp"
}
</script>
<style scoped>

.container {
display: flex;
align-items: center;
gap: 2rem;
animation: pulse 1500ms cubic-bezier(0.76, 0.09, 0.17, 0.68) infinite;
}

.spinner {
color: #000;
animation: spin 1500ms linear infinite;
}

.circleAnimation {
opacity: .4;
}

p {
color: var(--primary-light);
font-family: "Forum", serif;
font-weight: 400;
font-style: normal;
font-size: 2rem;
position: relative;
}
p::after {
content: '';
position: absolute;
animation: dots 1500ms ease-in-out infinite;
}

@keyframes spin {
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
}


@keyframes pulse {
0%, 100% {
  opacity: 1;
}
60% {
  opacity: .8;
}
}

@keyframes dots {
0% {
  content: ''
}
33% {
  content: '.'
}
66% {
  content: '..'
}
100% {
  content: '...'
}
}
</style>