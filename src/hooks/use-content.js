import { useEffect, useState } from 'react';
import { firebase } from '../lib/firebase.prod';

export default function useContent(target) {
    const [content, setContent] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then(snapshot => {
                const allContent = snapshot.docs.map(contentObj => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));
                setContent(allContent)
            })
            .catch(error => {
                console.log(error);
            });
        return () => {
            
        }
    }, [target]);


    return { [target]: content };
}