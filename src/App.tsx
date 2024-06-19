import {useState} from 'react'
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import categories from './expense-tracker/categories';
function App(){
  const [selectedCategory,setSelectedCategory]=useState('');
  const [expenses,setExpenses]=useState([
    {id:1,description:"cloth",amount:1000,category:'Utilities'},
    {id:2,description:"medicine",amount:1000,category:'Utilities'},
    {id:3,description:"household",amount:1000,category:'Utilities'},
    {id:4,description:"loan",amount:1000,category:'Utilities'}
  ]);
  const visibleExpenses=selectedCategory?expenses.filter((e)=>e.category===selectedCategory):expenses;
  
  return(
    <div>
      <div className="mb-3">
        <ExpenseForm onSubmit={expense=>setExpenses([...expenses,{...expense,id:expenses.length+1}])}/>
      </div>
      <div className="mb-3">
      <ExpenseFilter onSelectCategory={category=>setSelectedCategory(category)}></ExpenseFilter>
      </div>
      <ExpenseList expenses={visibleExpenses} 
      onDelete={(id)=>setExpenses(expenses.filter((e)=>e.id!==id))}/>
    </div>
  );
}
export default App;