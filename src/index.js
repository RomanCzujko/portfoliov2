import Post from './Post'
import * as $ from 'jquery'
import './styles/styles.css'
import './styles/styles.scss'
import './babel.js'
import './js/main.js'
// import './pages/policy.html'

// const post = new Post('EXAM post title', WebpackIMG)

$('p').html(post.toString())

console.log('Post to String:', post.toString())
