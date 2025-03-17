import { customRef, ref, reactive } from 'vue';

export default function (initValue: string, delay: number) {

    let timier: number
    let msg = customRef((track, trigger) => {
        return {
            get() {
                track()
                return initValue
            },
            set(value) {
                clearTimeout(timier)
                timier = setTimeout(() => {
                    initValue = value
                    trigger()
                }, delay);
            },
        }
    })

    return {msg}
}