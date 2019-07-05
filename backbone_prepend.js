var Item = Backbone.Model.extend({
            defaults: {
                message: 'hello world',
                count: 0
            },
            validate: function(attr, options) {
                if (attr.count % 2 != 0) {
                this.trigger('err', this.get('message') + attr.count + ' error');
                }
            }
            });

            var List = Backbone.Collection.extend({
            model: Item,
            validateModels: function() {
                this.each(function(m) {
                m.isValid(); // invoke models validate method
                });
            }
            });

            var ItemView = Backbone.View.extend({
            tagName: 'li',
            template: _.template($('#item').text()),
            events: {
                'click span.swap': 'swap',
                'click span.delete': 'remove' // triggers view's built in remove method
            },
            initialize: function() {
                this.listenTo(this.model, 'change', this.render);
                this.listenTo(this.model, 'err', this.errorHandler);
                this.render();
            },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            swap: function() {
                var words = this.model.get('message').split(' ');
                this.model.set({
                message: words.reverse().join(' ')
                });
            },
            errorHandler: function(msg) {
                this.$('span.error').text(msg)
            }
            });

            var ListView = Backbone.View.extend({
            template: $('#itemView').text(),
            events: {
                'click button#add': 'addItem',
                'click  button#save': 'saveCollection'
            },
            initialize: function() {
                this.collection = new List();
                this.listenTo(this.collection, 'add', this.appendItem);
                this.render();
            },
            render: function() {
                this.$el.html(this.template);
                this.collection.each(function(model) {
                this.appendItem(model);
                }, this);
            },
            addItem: function() {
                this.collection.add({
                count: this.collection.length
                }, {
                validate: true
                });
            },
            appendItem: function(item) {
                this.$('ul').append(new ItemView({
                model: item
                }).el);
            },
            saveCollection: function() {
                if (this.collection.length > 0) {
                this.collection.validateModels();
                } else
                alert('Collection is empty. Please add something.');
            }
            });
            new ListView().$el.appendTo('body');