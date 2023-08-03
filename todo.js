let myset = new Set();
printLocalStorage();
//reloadItems();
//clearLocalStorage();

const restoreButton = document.getElementById('restore');
restoreButton.onclick = function() {
    reloadItems();
}

        function addItem() {
            const x = document.getElementById('input').value;
            localStorage.setItem(JSON.stringify(Date.now()), (x));
            if(x != '' && !myset.has(x)) {
                myset.add(x);
                const list = document.getElementById('add');
                let li = document.createElement('li');
                li.appendChild(document.createTextNode(x));
                list.appendChild(li);
                clearText();
                li.onclick = function() {
                    myset.delete(x);
                    list.removeChild(li);
                };
          }   
        }
         
        function clearText() {
            document.getElementById('input').value = '';
        }

        function test() {
            alert(localStorage.getItem('x'));
        }

       function clearLocalStorage() {
        localStorage.clear();
       }

       function printLocalStorage() {
        for(let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            console.log(value);
        };
       }

       function reloadItems() {
        for(let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            let list = document.getElementById('add');
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
            li.onclick = function() {
                myset.delete(value);
                localStorage.removeItem(key);
                list.removeChild(li);
            };
        }
       }

       function test2() {
        alert("is this working?");
       }