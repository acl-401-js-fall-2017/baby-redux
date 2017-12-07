import expenses from './reducers';
import * as actions from './constants';
import expensesApi from '../services/expensesApi';


export function loadExpenses(id) {
    console.log('LOADING EXPENSES WITH ID ', id);
      return { 
          type: actions.EXPENSE_LOAD,
          payload: expensesApi.get(id).then( expenses => {
            console.log('loadexpenses expense:...', expenses)
            return {
              expenses,
              categoryId: id
            }
          })
      }
}

export const addExpense = ({ name, amount, budget }) => {
  return { 
      type: actions.EXPENSE_ADD,
      payload: expensesApi.add({ name, amount, budget }).then(expense => {
        console.log('addexpenese payload', { name, amount, budget })
        return {
         expense,
         categoryId: budget
        }
      })
    }
}

export const removeExpense = (id, categoryId) => {
      return { 
          type: actions.EXPENSE_REMOVE,
          payload: expensesApi.remove(id).then(()=> {
              return {
                  expenseId: id,
                  categoryId
              }
          }) 
        }
}

export const updateExpense = (expense) => {
      return { 
        type: actions.EXPENSE_UPDATE,
        payload: expensesApi.update(expense).then(()=> {
            return {
                categoryId: expense.budget,
                expense
            }
        })
    }
}