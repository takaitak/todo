
export const Todotodo = (props: { t: { id: number; title: string; createdAt: string; completedAt: string; isCompleted: boolean}; onClick: (arg0: any,arg1:number, arg2: boolean) => void }) => {
    return(
            <tr>
                <td>{props.t.title}</td>
                <td>{props.t.createdAt}</td>
                <td>{props.t.completedAt}</td>
                <td><button onClick={()=>props.onClick(props.t.id,0,props.t.isCompleted)}>{props.t.isCompleted? '取消':'完了'}</button></td>
                <td><button onClick={()=>props.onClick(props.t.id,1,false)}>削除</button></td>
            </tr>
    )                
}