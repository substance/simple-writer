export default function(tx) {
  var body = tx.get('body')
  tx.create({
    id: 'p1',
    type: 'paragraph',
    content: 'Hello world'
  })
  body.show('p1')
  tx.create({
    id: 'p2',
    type: 'paragraph',
    content: ""
  })
  body.show('p2')
}