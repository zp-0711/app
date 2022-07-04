<template>
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <student />
    <school />
  </div>
</template>

<script>
import school from "./components/School";
import student from "./components/Student";

const App = {
  name: "App",
  components: {
    school,
    student,
  },
};
export default App;
</script>

<style>
</style>