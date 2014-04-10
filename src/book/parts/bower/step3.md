# Step 3: Configure Bower

In the last step, you installed some dependencies using bower. However, 
there are a few problems with this approach:

* We don't want to add these dependencies to our git history
* There isn't much of a record of the installs or any control over 
the specific version installed
* Do we really want the dependencies in a `bower_components` directory

To rectify these issues, we will create a bower manifest. Enter the 
following:

```
# this command will bring up a wizard
$ bower init
```

Now, you should have a `bower.json` file. Study the contents, they are 
for the most part self-explanatory. Now, the next step is to add 
dependencies to the `bower.json` file. Run the commands from step 2,
but this time use the `--save` option:

```
$ bower install --save bootstrap
$ bower install --save fontawesome
```

You should notice that our bower manifest now has the dependencies 
and their version numbers. You could write the manifest by hand, but 
these shell commands tend to be faster.

The last part of this step deals with the last problem in this approach:
do we really want the dependencies in a `bower_components` directory. To 
change where `bower` installs dependencies, we need to configure bower by
creating a `.bowerrc` file with the following contents:

```
{
	"directory": "src/public/vendor"
}
```

Running a `bower install` will put our dependencies in a more conveniant
place.