using { srv.db as db } from '../../db/Database';


service MyService @(impl : './ProductService.js'){

    entity Products as projection on db.Product;

}