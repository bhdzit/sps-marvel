import { validationResult }  from 'express-validator';


const validarCampos = ( req, res, next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        let newErrors={errors:{}};

        errors.errors.map(item=>{
            newErrors.errors[item.param]=item;
        });
        return res.status(409).json(newErrors);
    }

    next();
}



export {
    validarCampos
}