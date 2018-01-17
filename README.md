# Deployment

Project is available in production mode on my server : http://raspi.dominique-blaze.fr

If you want to work on it in development mode, you need to install these following packages :

```bash
 npm install react react-dom redux react-redux redux-devtools redux-thunk cross-fetch expect deep-freeze fusioncharts react-fusioncharts react-bootstrap react-router react-router-dom react-datepicker moment react-moment react-bootstrap-router history react-csv --save
 ```

# Conclusion

This is my first app in React, and then, it cannot be perfect.
Even if i think the global organization is not so bad, i've experienced some difficulties wich merit closer consideration.

* Differences between version: espacially when the version of the deployment server is different from the development version. I've espacially experienced difficulties witch react-bootstrap-router
* Unit tests : My structure is not so bad, but a good unit tests system will be better :)
* Structure of my tree state.  I have been compelled to once again write some reducers, because my tree was not ideal. I've see some solutions such as normalizr.
* Learn to use webpack.
* Widgets such as a datepicker aren't always easy to found. There are many existing codes, but on a few of them are acceptable. Perhaps is there a widget / css framework better than bootstrap-react ...

The page "browse" is not implemented yet, but it's exactly same technical stuffs than in "closest" tab.
