
<script setup>
    import { ref, newPost, computed } from 'vue'
    const search = ref('');

    class Post {
        constructor(title, link, author, img) {
            title.value = title;
            link.value = link;
            author.value = author;
            img.value = img;
        }
    }

    const postList = ref([
        new Post(
            'https://vuejs.org/',
            'Chris',
            'https://vuejs.org/images/logo.png'
        ),
        new Post(
            'React.js',
            'https://vuejs.org/',
            'Chris',
            'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
        ),
        new Post(
            'Angular.js',
            'https://angular.org/',
            'Sma',
            'https://angular.js.org/img/ng-logo.png'
        ),
        new Post(
            'https://emberjs.org/',
            'Ember.js',
            'Rachel',
            'https://gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
        ),
        new Post(
            'Meteor.js',
            'https://meteor.com/',
            'Chris',
            'hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
        ),
        new Post(
            'Aurelia',
            'https://aurelia.io/',
            'Tim',
            'https://cdn.auth0.com/blog/aurelia-logo.png'
        ),
        new Post(
            'https://nodejs.org/en/',
            'Node.js',
            'A. A. Ron',
            'https://code-maven.com/img/node.png'
        ),
        new Post(
            'Pusher',
            'https://pusher.com/',
            'Alex',
            'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
        ),
        new Post(
            'Feather.js',
            'https://feathersjs.org/',
            'Chuck',
            'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
        ),
    ])
    
    const filteredList = computed({
        get: () => postList.value.filter(newPost),
        set: () => { newPost.title.toLowerCase().includes(search.value.tolowerCase()) }
    })

</script>

<template>
    <div class="container" id="container">
        <div class="sub-container">
            <div class="search-wrapper">
                <input type="text" v-model="search" id="searchBar" placeholder="Search title..." />
                    <!-- <label>Search title:</label> -->
            </div>
            <div class="wrapper">
                <div class="card" v-for="Post in filteredList" :key="Post">
                    <a v-bind:href="Post.link" target="_blank">
                        <img v-bind:src="Post.img">
                        <small>posted by: {{ Post.author }}</small>
                        {{ Post.title }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 16px 0;

        .sub-container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .search-wrapper {
                position: relative;
                label {
                    position:absolute;
                    font-size: 12px;
                    color: rgba(0,0,0, 0.5);
                    top: 8px;
                    left: 8px;
                    z-index: 2;
                    transition: 0.2s all ease-in-out;
                    background-color: white;
                }
                input {
                    padding: 4px 12px;
                    color: rgba(0,0,0, 0.7);;
                    border: 1px solid rgba(0,0,0, 0.12);
                    transition: 0.2s all ease-in-out;
                    background-color: white;
                    &:focus {
                        outline: none;
                        transform: scale(1.05)
                        label {
                            font-size: 10px;
                            transform: translateY(-24px) translateX(-12px);
                        }
                    }
                    &::webkit-input-placeholder {
                        font-size: 12px;
                        font-weight: 400;
                        color: rgba(0,0,0, 0.5);
                    }
                }
            }

            .wrapper {
                display: flex;
                max-width: 44px;
                flex-wrap: wrap;
                padding-top: 12px;

                .card {
                    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
                    max-width: 124px;
                    margin: 12px;
                    transition: 0.15s all ease-in-out;
                    &:hover {
                        transform: scale(1.1);
                    }
                    a {
                        text-decoration: none;
                        padding: 12px;
                        color: #03A9F4;
                        font-size: 24px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        img {
                            height: 100px
                        }
                        small {
                            font-size: 10px;
                            padding: 4px;
                        }
                    }
                }
            }
            .hotpink {
                background-color: hotpink;
            }

            .green {
                background-color: green;
            }

            .box {
                width: 100px;
                height: 100px;
                border: 1px solid rgba(0,0,0, 0.12);
            }
        }
    }
</style>