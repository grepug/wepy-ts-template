import { PageDecor, data, method } from 'wepy-ts'

@PageDecor({
    config: {
        disableScroll: true
    },
})
export class Me {

    @data
    private good = 'hiaac'

    @method
    hi () {
        console.log(this.good)
    }

    onLoad () {
        console.log(this)
        console.log(this.good)
    }

}