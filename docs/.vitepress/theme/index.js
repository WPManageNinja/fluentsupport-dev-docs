import DefaultTheme from 'vitepress/theme'
import './custom.scss'
import ExplainBlock from '../components/ExplainBlock.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('ExplainBlock', ExplainBlock)
    }
}