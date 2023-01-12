using { srv.db as db } from '../../db/Database';


service MyServiceCustomer 
@(impl : '/srv/ab/CustomerService.js')
{
    entity Customers as projection on db.Customer;

}