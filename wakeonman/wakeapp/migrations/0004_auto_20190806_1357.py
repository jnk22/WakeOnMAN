# Generated by Django 2.2.3 on 2019-08-06 11:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wakeapp', '0003_auto_20190806_1354'),
    ]

    operations = [
        migrations.RenameField(
            model_name='host',
            old_name='title',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='hostcategory',
            old_name='title',
            new_name='name',
        ),
    ]