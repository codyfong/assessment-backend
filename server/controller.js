const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."]



module.exports = {

    getCompliment: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    showAllCompliments: (req, res) => {
        res.status(200).send(compliments);
    },

    addCompliment: (req, res) => {
        console.log('addcompliment in controller')
        let { newCompliment } = req.body
        compliments.push(newCompliment)
        res.status(200).send(compliments);
    },

    updateCompliment: (req, res) => {
        // console.log('update compliment controller')
        // console.log(req.params)
        // console.log(req.query)
        // console.log(req.body)

        let {index} = req.body
        compliments.splice(index, 1, 'Nice!')
        // console.log(compliments)
        res.status(200).send(compliments);
        
    },

    deleteCompliment: (req, res) => {
        let { index } = req.params
        compliments.splice(index,1)
        res.status(200).send(compliments)
    }

}