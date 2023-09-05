<template>
  <v-app>
    <v-layout >
      <!--자식-->
      <User/>
    </v-layout >
    <v-main>
      <router-view/>
      <!-- <AppStatus/> -->
    </v-main>

  </v-app>

</template>

<script>
import User from "./components/User"

export default {
  name: 'App',
  components: {
    User
  }

}
</script>
