


function updateTodo(todo)
{
	//Implementation code here 
    if(todo === null || todo === ''){
        throw new TypeError('IllegalArgumentException');
    } else if(todo.createdDate === null || todo.createdDate=== ''){
        throw new TypeError('IllegalArgumentException');
    } else if(todo.createdTime == null || todo.createdTime=== ''){
        throw new TypeError('IllegalArgumentException');
    } else if(todo.userId == null || todo.userId=== ''){
        throw new TypeError('IllegalArgumentException');
    } else if(todo.dataStoreId == null || todo.dataStoreId=== ''){
        throw new TypeError('IllegalArgumentException');
    }  else if(todo.id == null || todo.id=== ''){
        throw new TypeError('IllegalArgumentException');
    } else {
        // Implement todo update
    }
    return todo;
}


function SaveObject(todo)
{
	//Implementation code here 
	return {}; 
}


function FetchObject(objectId)
{
	//Implementation code here 
	return {}; 
}


function DeleteObject(todo)
{
	//Implementation code here 
	return {}; 
}


function UpdateObject(todo)
{
	//Implementation code here 
	return {}; 
}


function fetchAllTodos(userId)
{
	//Implementation code here 
 if (userId == null || userId === '') {
        throw new TypeError('IllegalArgumentException');
    }
    return {};
}


function FetchAllObjects(userId)
{
	//Implementation code here 
	return {}; 
}


function createGroup(todoArray, groupId)
{
	//Implementation code here 
	 if (groupId === null || groupId === '') {
        throw new TypeError('IllegalArgumentException');
    }
    if (todoArray.contains(groupId)) {
        throw new TypeError('DuplicateGroupId');
    }
    return {};
}


function updatePriorityOfaTodo(id, priority)
{
if (id === null || id === '' || priority === null || priority === "") {
        throw new TypeError('IllegalArgumentException');
    }

    if (priority > 4 || priority < 1) {
        throw new TypeError('IllegalArgumentException');

    }
    if (FetchObjectImplementation(id) === null) {
        return false;
    }
    return {};
}


function fetchTodosBasedOnStatus(userId, status)
{
	//Implementation code here 
	 if (userId == null || userId === "") {
        throw new TypeError('Illegal Argument Exception');
    }
    var result = [];
    var allTodos = fetchAllTodos(userId);
    if (allTodos.length > 0) {
        for (var i = 0; i < allTodos.length; i++) {
            if (!(allTodos[i].status !== 1 || allTodos[i].status !== 2 || allTodos[i].status !== 3)) {
                throw new TypeError("Illegal Argument Exception");
            }
            else {
                result.push(allTodos[i]);
            }
        }
    }
    return result;
}


function remindOnDueDate(userId, dueDate)
{
	//Implementation code here 
  if (userId === null || dueDate === null) throw new TypeError('Illegal Argument Exception');
    if (userId === '' || dueDate === '') throw new TypeError('Illegal ArgumentException');
    var todo = fetchAllTodos(userId);
    return {};
}


function markTodoAsCompleted(id)
{
	//Implementation code here 
	  if (id === null || id === '') {
        throw new TypeError('IllegalArgumentException');
    }
   
    return {};
}
module.exports = {
updateTodo:updateTodo,
SaveObject:SaveObject,
FetchObject:FetchObject,
DeleteObject:DeleteObject,
UpdateObject:UpdateObject,
fetchAllTodos:fetchAllTodos,
FetchAllObjects:FetchAllObjects,
createGroup:createGroup,
updatePriorityOfaTodo:updatePriorityOfaTodo,
fetchTodosBasedOnStatus:fetchTodosBasedOnStatus,
remindOnDueDate:remindOnDueDate,
markTodoAsCompleted:markTodoAsCompleted }
//Mon May 20 2019 05:17:12 GMT+0000 (UTC)