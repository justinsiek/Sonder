import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { useHistory } from 'react-router-dom';
import fox from './assets/login.png';

const useMetaMask = () => {
    const [provider, setProvider] = useState(null);
    const [accounts, setAccounts] = useState(null);

    useEffect(() => {
        detectEthereumProvider()
            .then(setProvider)
            .catch(console.error);
    }, []);

    useEffect(() => {
        if (!provider) return;

        provider.request({ method: 'eth_requestAccounts' })
            .then(setAccounts)
            .catch(console.error);

    }, [provider]);

    return {
        provider,
        accounts,
    }
}

const LogIn = () => {
    const history = useHistory();
    const { accounts } = useMetaMask();

    useEffect(() => {
        if (accounts !== null) {
            history.push('/feed');
        }
    }, [accounts, history]);

    return <img src={fox} alt="fox"/>

}

export default LogIn