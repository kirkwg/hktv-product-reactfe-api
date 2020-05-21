const getTableData = (req, res, db) => {
  db.select('*').from('products')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const postTableData = (req, res, db) => {
  const {   name, code, weight, quantity, location } = req.body
  const added = new Date()
  db('products').insert({name, code, weight, quantity, location})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const postBulkData = (req, res, db) => {
  const {   name, code, weight, quantity, location } = req.body
  console.log("**req.body= " + req.body)
  //const added = new Date()
  
  const bulk = [
		{name: 'test01', code: 'code-001', weight: 30, quantity: 30, location: 'SSP' }, 
		{name: 'test02', code: 'code-002', weight: 40, quantity: 40, location: 'LK' }, 
		{name: 'test03', code: 'code-003', weight: 50, quantity: 50, location: 'TWW' } 
  ]
  db('products').insert(bulk)
    .returning('*')
    .then(item => {
      console.log(res.json(item))
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const putTableData = (req, res, db) => {
  const { id, name, code, weight, quantity, location } = req.body
  db('products').where({id}).update({name, code, weight, quantity, location})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const deleteTableData = (req, res, db) => {
  const { id } = req.body
  db('products').where({id}).del()
    .then(() => {
      res.json({delete: 'true'})
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

module.exports = {
  getTableData,
  postTableData,
  postBulkData,
  putTableData,
  deleteTableData
}