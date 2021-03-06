import { PageDecor, data, method } from 'wepy-ts'
import { CardComponent } from '../components/card'

@PageDecor({
    config: {
        disableScroll: true
    },
    components: {
        card: CardComponent
    }
})
export class Index {

    @data
    private good = 'ddd'

    @method
    hi () {
        console.log(this.good)
    }

    onLoad () {
        console.log(this)
        console.log(this.good)
    }

}