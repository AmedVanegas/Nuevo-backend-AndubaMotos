const getProducts = (req,res)=>{
    res.json({
        msg: 'listar productos'
    });
};
const pacthProducts = (req,res)=>{
    res.json({
        msg: 'actualiza los productos'
    });
};

const postProducts = (req,res)=>{
    res.json({
        msg: 'crea los productos'
    });
};


const deleteProducts = (req,res)=>{
    res.json({
        msg: 'borra productos'
    });
};



export  {getProducts,pacthProducts,postProducts,deleteProducts}