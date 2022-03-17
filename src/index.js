import './styles/index.scss'

const test = {
    name: 'Anton'
}

const user = {
    a: 1,
    b: 2,
    ...test
}

console.log(user)