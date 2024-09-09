<template>
    <div class="card">
        <div class="card-header">
            <slot name="card-header"></slot>
        </div>
        <div class="card-body">
            <slot name="card-body"></slot>
        </div>
        <div class="card-footer">
            <slot name="card-footer"></slot>
        </div>
    </div>
</template>

<script>


export default {
    name: 'CardComp'
}
</script>

<style scoped>

.card {
  width: 25rem;
}

.card {
  font-family: "Bellota Text", sans-serif;
  font-weight: 400;
  font-style: normal;
  border-radius: 0px !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  scale: 1;
  animation: easeIn 1s ease-out forwards;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  transition: 0.5s;
  transform: scale(1.01);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 0px !important;
  background: #fff;
}

img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
}

.card-header, .card-footer {
  background: #fff;
}
.card-body {
  padding: 16px;
}

.card-title {
  font-size: 1.25rem;
  margin: 0 0 8px;
}

.card-footer {
  border: none;
}



.card-text {
  margin: 0 0 8px;
}

.card-description{
  display: none;
  width: 100%;

}



</style>