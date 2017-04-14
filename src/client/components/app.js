/**
 * Created by ghemingway on 4/12/17.
 */

import React            from 'react';
import Username         from './username';
import Users            from './users';
import Comments         from './comments';
import PostEntry        from './entry';
require('./app.css');

const App = () => {
    return <div>
            <Username />
        <div>
            <Users />
            <Comments />
        </div>
        <PostEntry />
    </div>;
};

export default App;
