import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieDetail from '@/components/movie/MovieDetail'
import MovieList from '@/components/movie/MovieList'
import Music from '@/components/music/Music'
import MusicList from '@/components/music/MusicList'
import MusicAlbums from '@/components/music/MusicAlbums'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import PhotoList from '@/components/photo/PhotoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/movie/movielist',
    },
    {
      path:'/movie',
      component:Movie,
      children:[
        {
          path:'movieList',
          component:MovieList
        },
        {
          path:'movieDetail/:movieId',
          component:MovieDetail
        }
      ]
    },
    {
      path:'/music',
      component:Music,
      redirect:'/music/musicList',
      children:[
        {
          path:'musicList',
          component:MusicList
        },
        {
          path:'musicAlbums/:musicId',
          component:MusicAlbums
        }
      ]
    },
    {
      path:'/book',
      component:Book
    },
    {
      path:'/photo',
      component:Photo,
      redirect:'/photo/photoList',
      children:[
        {
          path:'photoList',
          component:PhotoList
        }
      ]
    }
  ]
})
