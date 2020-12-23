const events=require('events')
const util = require('util')


const person = function(name){
this.name = name
}
util.inherits(person,events.EventEmitter)

const obid = new person('obid')
const olima = new person('olima')
const olim = new person('olim')
const odil = new person('odil')



const people = [obid ,olima , olim , odil]

people.forEach( function(person){
    person.on('speak',function (msg){
console.log (`${person.name} said: ${msg}` )
    })
})


obid.emit('speak', 'salom')
odil.emit('speak', 'vaalaykum')
olim.emit('speak' ,'bolalarim')

/*
const myEmitter=new  events.EventEmitter()

myEmitter.on('someEvents',function(msg){
    console.log(msg)
})

myEmitter.emit('someEvents', 'chiqing endi')
*/