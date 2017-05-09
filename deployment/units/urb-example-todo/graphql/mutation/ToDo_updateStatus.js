Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _ToDoType=require('../type/ToDoType');var _ToDoType2=_interopRequireDefault(_ToDoType);
var _ViewerType=require('../../../../graphql/type/ViewerType');var _ViewerType2=_interopRequireDefault(_ViewerType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=


(0,_graphqlRelay.mutationWithClientMutationId)({
name:'ToDo_updateStatus',
inputFields:{
ToDo_Complete:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)},
id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)}},

outputFields:{
ToDo:{
type:_ToDoType2.default,
resolve:function resolve(_ref,_ref2,context,_ref3){var local_id=_ref.local_id;var args=_objectWithoutProperties(_ref2,[]);var objectManager=_ref3.rootValue;return objectManager.getOneObject('ToDo',{id:local_id});}},

Viewer:{
type:_ViewerType2.default,
resolve:function resolve(parent,args,context,_ref4){var objectManager=_ref4.rootValue;return objectManager.getOneObject('User',{id:objectManager.getViewerUserId()});}}},


mutateAndGetPayload:function mutateAndGetPayload(_ref5,context,_ref6){var id=_ref5.id,ToDo_Complete=_ref5.ToDo_Complete;var objectManager=_ref6.rootValue;
var local_id=(0,_graphqlRelay.fromGlobalId)(id).id;
return objectManager.update('ToDo',{
id:local_id,
ToDo_Complete:ToDo_Complete}).

then(function(){return{local_id:local_id};});
}});
//# sourceMappingURL=ToDo_updateStatus.js.map