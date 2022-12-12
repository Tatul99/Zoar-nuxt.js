<template>
   <BuildingImageComponent />
   <BuildingStructure />
   <BuildigAmenities />
   <BuildingPackages />
   <FloorPlans />
   <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12266.93893425388!2d44.81233349781493!3d39.768063862702576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1669301211184!5m2!1sen!2s" style="border:0;  width:100%; height:600px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>
<script setup>

</script>

<style scoped>
@media screen and (max-width: 1024px) {
  .map{
    height: 400px !important;
  }
}
@media screen and (max-width: 430px) {
  .map{
    height: 280px !important;
  }
}
</style>