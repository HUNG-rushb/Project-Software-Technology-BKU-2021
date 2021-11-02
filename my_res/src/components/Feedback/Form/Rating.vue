<template>
    <div class="rating">
        <ul class="list">
            <li @click="rate(star)" v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
                <i :class="star <= stars ? 'bi bi-star-fill' : 'bi bi-star'"></i> 
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Rating',
        props: ['grade', 'maxStars', 'hasCounter'],
        data() {
            return {
                stars: this.grade
            }
        },
        methods: {
            rate(star) {
                if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
                    this.stars = this.stars === star ? star - 1 : star
                }
            }
        },
    }
</script>

<style scoped>
.list {
    padding: 0;
    margin: 0 20px 0 0;
}
.list:hover .star {
    color: #ffd700;
}
.star {
    display: inline-block;
    font-size: 40px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    margin-right: 6px;
    color: #b7b7b7;
}
.star:hover ~ .star:not(.active) {
    color: #b7b7b7;
}
.star:first-child {
    margin-left: 0;
}
.star.active {
    color: #ffd700;
}
</style>