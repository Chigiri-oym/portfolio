<template>
    <div class="header">
        <div class="header_logo">
        Chigiri's Portfolio
        </div>
        <div class="header-icons">
           <font-awesome-icon icon="bars" size="2x" class="navi-icon" 
           :class="{'hidden': isHidden}" @click="toggleButton"></font-awesome-icon>
           <font-awesome-icon icon="times" size="2x" class="navi-icon" v-show="showNavi"
            :class="{'open': isActive}" @click="toggleButton"></font-awesome-icon>
        </div>
       <nav>
        <ul :class="{'open': isActive}">
        <router-link  to="/" exact><li>Top</li></router-link>
        <router-link  to="/about"><li>About</li></router-link>
        <router-link  to="/skills"><li>Skills</li></router-link>
        <router-link  to="/projects"><li>Projects</li></router-link>
        <router-link  to="/works"><li>Works</li></router-link>
      </ul>
      </nav>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isHidden: false,
            isActive: false,
            showNavi: false
        }
    },
    methods: {
        toggleButton() {
            this.isHidden = !this.isHidden,
            this.isActive = !this.isActive,
            this.showNavi = !this.showNavi
        }
    }
}
</script>